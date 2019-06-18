require 'helpers/emr_helper'

describe dynamodb_table('command-dev') do
  it { should exist }
  it { should have_attribute_definition('CustomerId').attribute_type('N') }
  it { should have_attribute_definition('Name').attribute_type('N') }
  it { should have_key_schema('CustomerId').key_type('HASH') }

end