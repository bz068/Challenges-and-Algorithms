/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package regex;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Regex {
  public static void main(String[] args) {
//      uk phone number check
//    String re = "(\\d{4}\\s)?\\d{4,5}\\s?\\d{6}"; 

//checksum
    String re = "[A-Za-z]{2}\\d{9}";
      
    Pattern pattern = Pattern.compile(re);
    Matcher matcher = pattern.matcher("ab165676542");
    
    boolean matchFound = matcher.matches();
    if(matchFound) {
      System.out.println("Match found");
    } else {
      System.out.println("Match not found");
    }
  }
}
// Outputs Match found