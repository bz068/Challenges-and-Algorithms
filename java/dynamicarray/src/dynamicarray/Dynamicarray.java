
package dynamicarray;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Dynamicarray {
    

    
    public static void main(String[] args) {
//       Array arr = new Array(3);
//       arr.add(10);
//       arr.add(10);
//       arr.add(120);
//       arr.add(100);
//       arr.add(110);
//       arr.add(1220);
//       arr.removeAt(5);
       
//        System.out.println(arr.indexOf(1220));

//       arr.print();
//    int[] array = {12,11,12,13,13,15,16,200,100,3000};
//      String[] array = {"Baghdad", "Baggy", "Rabs", "Zai"};
//    BinarySearch s = new BinarySearch();
//    int result = s.search(array, "Rabs");
//    
//        System.out.println(result);
//    

//        LocalDateTime ld = LocalDateTime.now();
//        DateTimeFormatter l = DateTimeFormatter.ofPattern("dd-MM-yyyy  HH:mm:ss");
//        String date = ld.format(l);
//        System.out.println(date);

    
    
//        System.out.println(reverseSTR("baggy"));
   
        System.out.println(reverseINT(1234));
        
    }
//    public static String reverseSTR(String str){
//        byte[] arr = str.getBytes();
//       
//        byte[] result = new byte[str.length()];
//        
//        for(int i =0 ; i < str.length();i++)
//            result[i] = arr[arr.length - i -1];
//            
//        String s = new String(result);
//        return s;
    
    public static int reverseINT(int x){
        int reverse = 0;
        
        while(x != 0){
            int digit = x % 10;
            reverse = reverse * 10 + digit;
            
            x /= 10;
        }
        return reverse;
}
    
    
    
}
