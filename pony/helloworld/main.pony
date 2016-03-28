actor Main
    new create(env: Env) =>
        env.out.print("Hello, world!")
        var tundraka = Tundraka.build("a")
        env.out.print(tundraka.onConstructor)
        env.out.print(tundraka.something)
        tundraka.something = "u"
        env.out.print(tundraka.something)

class Tundraka
    let onConstructor: String = "cancion"
    var something: String
    var _private: String

    new build(onConstructor': String) =>
        onConstructor = onConstructor'
        something = ""
        _private = ""


