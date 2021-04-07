
package dynamicarray;

import com.sun.corba.se.impl.oa.poa.AOMEntry;


public class Array {
    private int[] arr;
    int count = 0;
    
    public Array(int length){
        arr = new int[length];
        
    }
    
    public void add(int item){
        if(arr.length == count){
            int[] newArr = new int[count *2];
            for(int i = 0; i < count;i++)
                newArr[i] = arr[i];
            arr=newArr;
        }
        arr[count] = item;
        count++;
    }
    
    public void removeAt(int index){
        if(index < 0 || index >= count)
            throw new IllegalArgumentException();
        
        for(int i = index; i < count-1 ;i++)
           arr[i] = arr[i + 1];
        
        count--;
    }
    
    public int indexOf(int item){
        for(int i = 0; i<arr.length; i++)
            if(arr[i] == item)
                return i;
            
        return -1;
        
    }
    
    public void print(){
        for(int i = 0; i < count;i++){
            System.out.println(arr[i]);
        }
    }
    
   
}
