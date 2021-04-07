
package dynamicarray;

public class BinarySearch {
    
  
//  public  int search(int[] arr, int x){
//      int left = 0, right = arr.length -1;
//      
//      while(left <= right){
//          int m = left + (right - left ) /2;
//          
//          if(arr[m] == x)
//              return m;
//          
//          if(arr[m]<x)
//              left = m +1;
//          else
//              right = m-1;
//          
//      }
//      return -1;
//  }
    
    public int search(String[] arr, String x){
        int left = 0, right = arr.length -1;
        
        while(left <=right){
            int m = left +(right - left ) /2;
            
            int res = x.compareTo(arr[m]);
            
            if(res == 0)
                return m;
            if(res > 0)
                left = m+1;
            else
                right = m -1;
        }
        return -1;
    }
}
