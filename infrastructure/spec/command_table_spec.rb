describe dynamodb_table('command-dev') do
  it { should exist }
  it { should have_attribute_definition('CustomerId').attribute_type('S') }
  it { should have_key_schema('CustomerId').key_type('HASH') }
  its('stream_specification.stream_enabled') { should eq true }
  its('stream_specification.stream_view_type') { should eq 'NEW_IMAGE' }

end