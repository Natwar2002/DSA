var buildArray = function (target, n) {
    let st = [];
    let cur = 1, i = 0;
    while(cur <= n && i < target.length) {
        if(target[i] == cur) {
            st.push("Push");
            cur++;
            i++;
        } else {
            st.push("Push");
            st.pop("Pop");
            cur++;
        }
    }
    return st;
}