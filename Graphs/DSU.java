import java.util.* ; 

class DSU{
    static int[] par ; 
    static int[] size ;

    DSU(int n){
       par = new int[n] ;
       size = new int[n] ;

       for(int i=0;i<n;i++){
        par[i] = i ; 
        size[i] = 1 ; 
       }
    }

    int findPar(int x){
        if(par[x] == x) return x ; 
        return par[x] = findPar(par[x]) ; 
    }

    void union(int x , int y){
        int parx = findPar(x) ; 
        int pary = findPar(y) ; 
        
        if(parx == pary) return  ; 

        int sizex = size[parx] ; 
        int sizey = size[pary] ; 

        if(sizex > sizey){
            par[pary] = parx ; 
            size[parx] += size[pary] ; 
        }
        else{
            par[parx] = pary ; 
            size[parx] += size[pary] ;
        }
    }

    boolean isSameComponent(int x , int y){
        return findPar(x) == findPar(y) ; 
    }
}