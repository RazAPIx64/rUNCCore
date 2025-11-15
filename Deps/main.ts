export namespace rUNC {
    export namespace core {
        // [rUNCCore::Deps::Communicator]
        export let cache_comm: Folder = ReplicatedStorage.FindFirstChild("rUNCCommunication") as Folder;

        // [rUNCCore::Deps::Directory]
        export let comm_directory: Instance;

        // [rUNCCore::Deps::SignConnection(RBXScriptSignal, Function)]
        export const sign_connection = <T extends (...args: unknown[]) => void>(c: RBXScriptSignal<T>, f: T) => c.Connect(f);

        // [rUNCCore::Deps::Assert(Condition: Boolean, Function: string, Message: string)]
        export const As = (con: boolean, fn: string, msg: string) {}

        // [rUNCCore::Deps::Analyze(Function: string, Callback: Function)]
        export const Analyze = (fn: string, callback: () => void) {}
    }
}
