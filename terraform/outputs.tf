output "ssh_script" {
  value = "ip: ${aws_instance.node.public_ip}"
}