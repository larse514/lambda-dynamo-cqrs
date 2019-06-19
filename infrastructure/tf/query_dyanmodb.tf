resource "aws_dynamodb_table" "query-dynamodb-table" {
  name           = "query-${var.environment}"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "CustomerId"

  attribute {
    name = "CustomerId"
    type = "S"
  }

  tags = {
    Name        = "query-${var.environment}"
    Environment = "${var.environment}"
  }
}