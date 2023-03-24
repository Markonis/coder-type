import { Repo } from ".";

export const railsRepo: Repo = {
	label: "Rails",
	url: "https://github.com/rails/rails",
	files: [
		{
			path: "/activerecord/examples/simple.rb",
			code:
				`
# frozen_string_literal: true

require "active_record"

class Person < ActiveRecord::Base
    establish_connection adapter: "sqlite3", database: "foobar.db"
    connection.create_table table_name, force: true do |t|
    t.string :name
    end
end

bob = Person.create!(name: "bob")
puts Person.all.inspect
bob.destroy
puts Person.all.inspect
`
		},
		{
			path: "/activerecord/lib/active_record.rb",
			code:
				`
singleton_class.attr_reader :db_warnings_action

def self.db_warnings_action=(action)
    @db_warnings_action =
    case action
    when :ignore
        nil
    when :log
        ->(warning) do
        warning_message = "[#{warning.class}] #{warning.message}"
        warning_message += " (#{warning.code})" if warning.code
        ActiveRecord::Base.logger.warn(warning_message)
        end
    when :raise
        ->(warning) { raise warning }
    when :report
        ->(warning) { Rails.error.report(warning, handled: true) }
    when Proc
        action
    else
        raise ArgumentError, "db_warnings_action must be one of :ignore, :log, :raise, :report, or a custom proc."
    end
end

self.db_warnings_action = :ignore

# Specify allowlist of database warnings.
singleton_class.attr_accessor :db_warnings_ignore
self.db_warnings_ignore = []

singleton_class.attr_accessor :writing_role
self.writing_role = :writing

singleton_class.attr_accessor :reading_role
self.reading_role = :reading

def self.legacy_connection_handling=(_)
    raise ArgumentError, <<~MSG.squish
    The legacy_connection_handling setter was deprecated in 7.0 and removed in 7.1,
    but is still defined in your configuration. Please remove this call as it no longer
    has any effect."
    MSG
end
`
		},
		{
			path: "/actiontext/db/migrate/20180528164100_create_action_text_tables.rb",
			code:
				`
class CreateActionTextTables < ActiveRecord::Migration[6.0]
def change
    primary_key_type, foreign_key_type = primary_and_foreign_key_types

    create_table :action_text_rich_texts, id: primary_key_type do |t|
    t.string     :name, null: false
    t.text       :body, size: :long
    t.references :record, null: false, polymorphic: true, index: false, type: foreign_key_type

    t.timestamps

    t.index [ :record_type, :record_id, :name ], name: "index_action_text_rich_texts_uniqueness", unique: true
    end
end

private
    def primary_and_foreign_key_types
    config = Rails.configuration.generators
    setting = config.options[config.orm][:primary_key_type]
    primary_key_type = setting || :primary_key
    foreign_key_type = setting || :bigint
    [primary_key_type, foreign_key_type]
    end
end
`
		},
		{
			path: "/railties/lib/rails/info_controller.rb",
			code:
				`
class Rails::InfoController < Rails::ApplicationController # :nodoc:
prepend_view_path ActionDispatch::DebugView::RESCUES_TEMPLATE_PATHS

before_action :require_local!

def index
    redirect_to action: :routes
end

def properties
    @info = Rails::Info.to_html
    @page_title = "Properties"
end

def routes
    if query = params[:query]
    query = URI::DEFAULT_PARSER.escape query

    render json: {
        exact: matching_routes(query: query, exact_match: true),
        fuzzy: matching_routes(query: query, exact_match: false)
    }
    else
    @routes_inspector = ActionDispatch::Routing::RoutesInspector.new(_routes.routes)
    @page_title = "Routes"
    end
end

private

def matching_routes(query:, exact_match:)
    return [] if query.blank?

    normalized_path = ("/" + query).squeeze("/")

    _routes.routes.filter_map do |route|
        route_wrapper = ActionDispatch::Routing::RouteWrapper.new(route)

        if exact_match
        match = route.path.match(normalized_path)
        match ||= (query_without_url_or_path_suffix === route_wrapper.name)
        else
        match = route_wrapper.path.match(query)
        match ||= route_wrapper.name.include?(query_without_url_or_path_suffix)
        end

        match ||= (query === route_wrapper.verb)

        unless match
        controller_action = URI::DEFAULT_PARSER.escape(route_wrapper.reqs)
        match = exact_match ? (query === controller_action) : controller_action.include?(query)
        end

        route_wrapper.path if match
        end
    end
end
`
		},
		{
			path: "/railties/lib/rails/app_updater.rb",
			code:
				`
module Rails
    class AppUpdater
    class << self
        def invoke_from_app_generator(method)
        app_generator.send(method)
        end

        def app_generator
        @app_generator ||= begin
            gen = Rails::Generators::AppGenerator.new ["rails"], generator_options, destination_root: Rails.root
            gen.send(:valid_const?) unless File.exist?(Rails.root.join("config", "application.rb"))
            gen
        end
        end

        private
        def generator_options
            options = { api: !!Rails.application.config.api_only, update: true }
            options[:name]                = Rails.application.class.name.chomp("::Application").underscore
            options[:skip_active_job]     = !defined?(ActiveJob::Railtie)
            options[:skip_active_record]  = !defined?(ActiveRecord::Railtie)
            options[:skip_active_storage] = !defined?(ActiveStorage::Engine)
            options[:skip_action_mailer]  = !defined?(ActionMailer::Railtie)
            options[:skip_action_mailbox] = !defined?(ActionMailbox::Engine)
            options[:skip_action_text]    = !defined?(ActionText::Engine)
            options[:skip_action_cable]   = !defined?(ActionCable::Engine)
            options[:skip_test]           = !defined?(Rails::TestUnitRailtie)
            options[:skip_system_test]    = Rails.application.config.generators.system_tests.nil?
            options[:skip_asset_pipeline] = !defined?(Sprockets::Railtie) && !defined?(Propshaft::Railtie)
            options[:skip_bootsnap]       = !defined?(Bootsnap)
            options
        end
    end
    end
end
`
		},
        {
            path: "/actioncable/lib/action_cable.rb",
            code:
                `
Zeitwerk::Loader.for_gem.tap do |loader|

loader.inflector.inflect("postgresql" => "PostgreSQL")
end.setup

module ActionCable
require_relative "action_cable/version"
require_relative "action_cable/deprecator"

INTERNAL = {
    message_types: {
    welcome: "welcome",
    disconnect: "disconnect",
    ping: "ping",
    confirmation: "confirm_subscription",
    rejection: "reject_subscription"
    },
    disconnect_reasons: {
    unauthorized: "unauthorized",
    invalid_request: "invalid_request",
    server_restart: "server_restart",
    remote: "remote"
    },
    default_mount_path: "/cable",
    protocols: ["actioncable-v1-json", "actioncable-unsupported"].freeze
}

module_function def server
    @server ||= ActionCable::Server::Base.new
end
end
`
        }
	]
}
