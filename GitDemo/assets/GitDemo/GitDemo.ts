import * as cc from "cc";
const { ccclass, property } = cc._decorator;

@ccclass("GitDemo")
export class GitDemo extends cc.Component {
    start() {
        console.log("gitdemo-master");
        console.log("gitdemo-master-1");
        console.log("gitdemo-first");
        console.log("gitdemo-frist1");
        console.log("gitdemo-frist2");
        console.log("gitdemo-frist3");
        console.log("gitdemo-frist4");
        console.log("gitdemo-second1");    
        console.log("gitdemo-second11");    
        console.log("gitdemo-second00");    
        console.log("gitdemo-second000");    
        console.log("gitdemo-main1");    
        console.log("gitdemo-test1");    
        console.log("gitdemo-main11");    
        console.log("gitdemo-test11");    
        console.log("gitdemo-main2");    

        console.log("2023.11.6--test1");
    }

    update(deltaTime: number) {}
}
