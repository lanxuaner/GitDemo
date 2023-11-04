import * as cc from "cc";
const { ccclass, property } = cc._decorator;

@ccclass("GitDemo")
export class GitDemo extends cc.Component {
    start() {
        console.log("gitdemo-master");
        console.log("gitdemo-first");
        console.log("gitdemo-frist1");
        console.log("gitdemo-frist2");
        console.log("gitdemo-frist3");
    }

    update(deltaTime: number) {}
}
