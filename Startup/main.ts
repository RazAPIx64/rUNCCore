// [rUNCCore]
export namespace rUNC
{
    // [rUNCCore::Startup]
    export namespace Startup
    {
        // [rUNC::Startup::PlaceDependencies]
        export let place_dependencies = {
            id: 10104167448374972,
            teleport_service: game.GetService('TeleportService'),
        };

        // [rUNC::Startup::DataModel]
        export let data_model = game;

        // [rUNC::Startup::DevMode]
        export let developer_mode = true;

        // [rUNC::Startup::GlobalEnvironmentCheck]
        export let does_genv_work = pcall(getgenv);

        // [rUNC::Startup::AlternativeGlobalEnvironment]
        export let work_around;
    }
}
