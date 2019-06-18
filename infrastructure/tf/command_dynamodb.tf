resource "aws_dynamodb_table" "command-dynamodb-table" {
  name           = "command-${var.environment}"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "CustomerId"

  attribute {
    name = "CustomerId"
    type = "S"
  }

  attribute {
    name = "Name"
    type = "S"
  }

  tags = {
    Environment = "${var.environment}"
  }
}