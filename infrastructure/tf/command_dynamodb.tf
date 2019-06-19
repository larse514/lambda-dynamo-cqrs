resource "aws_dynamodb_table" "command-dynamodb-table" {
  name             = "command-${var.environment}"
  read_capacity    = 1
  write_capacity   = 1
  hash_key         = "CustomerId"
  stream_enabled   = true
  stream_view_type = "NEW_IMAGE"

  attribute {
    name = "CustomerId"
    type = "S"
  }

  tags = {
    Name        = "command-${var.environment}"
    Environment = "${var.environment}"
  }
}
