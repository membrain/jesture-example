# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_membrain_jesture-example_session',
  :secret      => 'f5923c45502ac6adb33e7b7b204c1e13ed7c71778c909d0eb88cd529db50ad0c51ef0b4ca6a1d9c6e0fbb0622920c9a6eb84c50daaf41b7c8ec6cdb1d81ea03d'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
