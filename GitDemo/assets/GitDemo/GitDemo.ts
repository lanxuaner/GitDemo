import * as cc from "cc";
const { ccclass, property } = cc._decorator;

@ccclass("GitDemo")
export class GitDemo extends cc.Component {
    start() {
        console.log("gitdemo-master");
        console.log("gitdemo-first");
        console.log("gitdemo-frist1");
    }

    update(deltaTime: number) {}
}
