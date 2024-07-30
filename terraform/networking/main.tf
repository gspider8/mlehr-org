resource "aws_security_group" "sg" {
  name = "mlehr-sg"
  description = "MySG"
  # Use Default VPC
  tags = {
    project: var.project_name
  }
}

resource "aws_vpc_security_group_ingress_rule" "all_ssh" {
  security_group_id = aws_security_group.sg.id
  description = "SSH from my IP"
  ip_protocol = "tcp"
  from_port = 22
  to_port = 22
  cidr_ipv4 = var.my_ip
}

resource "aws_vpc_security_group_ingress_rule" "http_ipv4" {
  security_group_id = aws_security_group.sg.id
  description = "HTTP From all IPV4 Addresses"
  ip_protocol = "tcp"
  from_port = 80
  to_port = 80
  cidr_ipv4 = "0.0.0.0/0"
}

resource "aws_vpc_security_group_ingress_rule" "http_ipv6" {
  security_group_id = aws_security_group.sg.id
  description = "HTTP From all IPV6 Addresses"
  ip_protocol = "tcp"
  from_port = 80
  to_port = 80
  cidr_ipv6 = "::/0"
}

resource "aws_vpc_security_group_egress_rule" "allow_all_traffic_ipv4" {
  security_group_id = aws_security_group.sg.id
  description = "allow all ipv4 traffic"
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1" # semantically equivalent to all ports
}

resource "aws_vpc_security_group_egress_rule" "allow_all_traffic_ipv6" {
  security_group_id = aws_security_group.sg.id
  description = "allow all ipv6 traffic"
  cidr_ipv6         = "::/0"
  ip_protocol       = "-1" # semantically equivalent to all ports
}
