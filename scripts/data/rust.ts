import { Repo } from "./index";

export const rustRepo:Repo={
    label:'Rust',
    url: "https://rustlang.org",
    files:[
        {
            path:"/home/<username>/.cargo/bin/rustc",
            code:`
            Rust is a statically-typed programming language designed for performance and safety, \nespecially safe concurrency and memory management.A language empowering everyone 
to build reliable and efficient software. Example of a rust program:

fn main() {
    let hello=String::from("Hello world!");
    println!("{}",hello);
}
            `
        }
    ]
}