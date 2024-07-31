// Networking
module "networking" {
  source          = "./networking"
  project_name         = var.project_name
  my_ip = var.my_ip
}

// Compute
data "aws_ami" "server_ami" {
  most_recent = true
  owners      = ["099720109477"]

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"] # ignore date
  }
}

resource "aws_key_pair" "ssh" {
  key_name   = var.key_name
  public_key = file(var.public_key_path)
}

resource "aws_instance" "node" {
  instance_type          = var.main_instance_type
  ami                    = data.aws_ami.server_ami.id
  vpc_security_group_ids = [module.networking.sg_id]
  key_name = aws_key_pair.ssh.id
  tags = {
    Name    = var.project_name
    project = var.project_name
  }
  user_data = templatefile("./bin/userdata.tpl",
    {
      git_repo_url = "https://github.com/gspider8/mlehr-org.git"
      project_main_dir_name = "djangoProject"
      nginx_site_name = "mlehr_django"
    }
  )
}
