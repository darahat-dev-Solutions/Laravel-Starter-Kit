# Laravel Artisan Commands Documentation

Here's a comprehensive list of common Laravel Artisan commands that you can save as a documentation file for your project.

## Where to Store the Documentation

You should store this documentation file in one of these locations in your Laravel project:

1. `/docs/commands.md` - Create a `docs` directory in your project root
2. `/resources/docs/commands.md` - Inside the resources directory
3. `/public/docs/commands.md` - If you want it publicly accessible

Markdown (.md) format is recommended as it's easily readable in code editors and can be rendered by GitHub/GitLab.

## Laravel Artisan Commands Cheat Sheet

### Application

```bash
php artisan serve                 # Start the development server
php artisan down                 # Put application into maintenance mode
php artisan up                   # Bring application out of maintenance mode
php artisan optimize             # Cache the framework bootstrap files
php artisan clear-compiled       # Remove the compiled class file
php artisan env                  # Display the current framework environment
php artisan help [command]       # Get help for a command
```

### Make Commands (Code Generation)

```bash
# Controllers
php artisan make:controller ControllerName                     # Basic controller
php artisan make:controller ControllerName --resource          # Resource controller
php artisan make:controller ControllerName --api               # API resource controller
php artisan make:controller ControllerName --invokable          # Single action controller
php artisan make:controller ControllerName --model=ModelName   # Controller with model

# Models
php artisan make:model ModelName                               # Basic model
php artisan make:model ModelName -m                            # Model with migration
php artisan make:model ModelName -c                            # Model with controller
php artisan make:model ModelName -mcr                          # Model with migration, controller & resource

# Migrations
php artisan make:migration create_table_name_table             # Create migration
php artisan make:migration add_column_to_table_name_table      # Add column migration
php artisan make:migration remove_column_from_table_name_table # Remove column migration

# Seeders
php artisan make:seeder SeederName                             # Create seeder
php artisan db:seed                                            # Run all seeders
php artisan db:seed --class=SeederName                        # Run specific seeder

# Factories
php artisan make:factory FactoryName                           # Create factory
php artisan make:factory FactoryName --model=ModelName         # Factory for specific model

# Requests
php artisan make:request RequestName                           # Create form request

# Policies
php artisan make:policy PolicyName                             # Create policy
php artisan make:policy PolicyName --model=ModelName           # Policy for specific model

# Middleware
php artisan make:middleware MiddlewareName                     # Create middleware

# Commands
php artisan make:command CommandName                           # Create Artisan command

# Events
php artisan make:event EventName                               # Create event
php artisan make:listener ListenerName                         # Create listener
php artisan make:listener ListenerName --event=EventName       # Listener for specific event

# Notifications
php artisan make:notification NotificationName                 # Create notification

# Mail
php artisan make:mail MailName                                 # Create mail class

# Jobs
php artisan make:job JobName                                   # Create job
php artisan make:job JobName --sync                            # Create synchronous job

# Testing
php artisan make:test TestName                                 # Create feature test
php artisan make:test TestName --unit                          # Create unit test
```

### Database

```bash
php artisan migrate                     # Run all pending migrations
php artisan migrate:fresh               # Drop all tables and re-run migrations
php artisan migrate:refresh             # Reset and re-run all migrations
php artisan migrate:reset               # Rollback all database migrations
php artisan migrate:rollback            # Rollback the last database migration
php artisan migrate:status              # Show the status of each migration
php artisan db:wipe                     # Drop all tables, views, and types

php artisan make:observer ObserverName --model=ModelName  # Create observer
```

### Cache

```bash
php artisan cache:clear                 # Clear application cache
php artisan config:clear                # Clear config cache
php artisan route:clear                 # Clear route cache
php artisan view:clear                  # Clear compiled views
php artisan event:clear                 # Clear event cache

php artisan cache:forget key_name       # Remove item from cache
php artisan config:cache                # Cache configuration files
php artisan route:cache                 # Cache route files
php artisan view:cache                  # Cache compiled views
php artisan event:cache                 # Cache event files
```

### Authentication

```bash
php artisan make:auth                   # Scaffold basic auth (Laravel < 6)
php artisan ui:auth                     # Scaffold auth (Laravel 6+)
php artisan ui:auth --views             # Generate auth views only
php artisan ui:auth --type=vue          # Generate auth with Vue
php artisan ui bootstrap --auth         # Auth with Bootstrap
php artisan ui vue --auth               # Auth with Vue
```

### Queue

```bash
php artisan queue:work                  # Start queue worker
php artisan queue:restart               # Restart queue worker
php artisan queue:listen                # Listen to queue
php artisan queue:failed                # List failed jobs
php artisan queue:retry all             # Retry all failed jobs
php artisan queue:flush                 # Flush all failed jobs
php artisan queue:forget [id]           # Delete failed job
```

### Testing

```bash
php artisan test                        # Run all tests
php artisan test --filter=methodName    # Run specific test
php artisan test --coverage              # Run tests with coverage
```

### Package Development

```bash
php artisan vendor:publish              # Publish package assets
php artisan vendor:publish --tag=tagName # Publish specific tag
php artisan vendor:publish --provider=ProviderName # Publish for provider
```

### Maintenance

```bash
php artisan route:list                  # List all registered routes
php artisan schedule:run                # Run scheduled commands
php artisan storage:link                # Create storage link
php artisan make:cast CastName          # Create custom cast
php artisan make:channel ChannelName    # Create broadcast channel
```

### Tinker (REPL)

```bash
php artisan tinker                      # Interactive shell
```
