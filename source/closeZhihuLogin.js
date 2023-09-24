function showAllNode(root,level){
    //console.log("i am level:",level)
    var s=""
    for (var l=0;l<level;l++){
        s=s+"  "
    }
    var attrs=root.attributes
    var attrStr="["
    for (var i=0;i<attrs.length;i++){
        attrStr=attrStr+" "+attrs[i].name+":"+attrs[i].value
    }
    attrStr=attrStr+"]"
    console.log(s,root.tagName,attrStr)
    var childs=root.children
    if (childs!=null) {
    //    console.log("childsLen:",childs.length)
        for (var i = 0; i < (childs.length); i++) {
            var child=childs[i]
            showAllNode(child, level + 1)
        }
    }

}
function simulateClick(element) {
    if (element==null ||element==undefined){
        return
    }
    var event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    var canceled = element.dispatchEvent(event);
    console.log("点击完毕：",canceled)
}
function solve(){
    console.log("i am run")
    //showAllNode(document.body,0)
    console.log("after traver")
    const btn=document.querySelector("[aria-label='关闭']")
    if (btn!=null){
       for (var i=0;i<btn.length;i++){
           console.log(btn[i].tagName,":")
           for (var j=0;j<btn[i].attributes.length;j++){
               console.log(btn[i].attributes[j])
           }

       }
        btn.addEventListener("click",()=>{
            console.log("你点击了，我发现了")
        })
        console.log("开始点击")
        simulateClick(btn)
    }
    console.log("i am over")
    let observer = new MutationObserver(
        // 回调函数是一个 MutationRecord 实例数组。格式如下：
        //     [MutationRecord, MutationRecord, MutationRecord, ...]
        (mutationRecords) => {
            console.log("i am ob run x")
            for (var i=0;i<mutationRecords.length;i++){
                console.log(mutationRecords)
            }
        }
    );
    rootNode=document.getRootNode()
    observer.observe(rootNode, {
        // 观察子节点变化
        childList: true,

    });


}
//solve()
//setTimeout(solve,5000)
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    solve()
});










































