describe dynamodb_table('query-dev') do
  it { should exist }
  it { should have_attribute_definition('CustomerId').attribute_type('S') }
  it { should have_key_schema('CustomerId').key_type('HASH') }
end