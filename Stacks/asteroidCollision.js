var asteroidCollision = function (a) {
    let st = new Stack();
    let i = 0;
    while(i < a.length) {
        if(st.isEmpty()) {
            st.push(arr[i]);
            i++;
        } else {
            if (st.top() > 0 && a[i] < 0) {
                if(Math.abs(st.top()) == Math.abs(a[i])) {
                    st.pop();
                    i++;
                } else if (Math.abs(st.top()) > Math.abs(a[i])) {
                    i++;
                } else {
                    while(!st.isEmpty() && st.top() > 0 && a[i] < 0 && Math.abs(st.top()) < Math.abs(a[i])) {
                        st.pop();
                    }
                }
            } else {
                st.push(a[i]);
                i++;
            }
        }
    }

    let res = [];
    let j = 0;
    while(!st.isEmpty()) {
        res[j] = st.pop();
        i++;
    }
    return res;
}