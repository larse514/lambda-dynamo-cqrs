require 'awspec'
require 'rspec/retry'

RSpec.configure do |config|
  config.filter_run focus: true
  config.run_all_when_everything_filtered = true

  # This works around issues with rate limiting discussed at https://github.com/k1LoW/awspec/issues/122.
  config.default_sleep_interval = 1
  config.exceptions_to_retry = [Aws::IAM::Errors::Throttling]

  config.around :each do |ex|
    ex.run_with_retry retry: 3
  end
end
