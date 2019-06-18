provider "aws" {
  region  = "${var.aws-default-region}"
  version = "1.60"
  profile = "default"
}

terraform {
  backend "s3" {
    // The backend configuration is created automatically during deployment.
  }
}
