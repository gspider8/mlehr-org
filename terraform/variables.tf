variable "main_instance_type" {
  type = string
  default = "t3.micro"
}

// sensitive
variable "my_ip" {
  type = string
}

variable "project_name" {
  type = string
}

variable "key_name" {}
variable "public_key_path" {}




