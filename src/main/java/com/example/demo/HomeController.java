package com.example.demo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

//	RestController를 설정할 경우, react로 반환되는 값보다 return되는 String이 더 우선처리되어 주석 처리
//	@GetMapping("/")
//	public String index() {
//		return "Hello SpringBoot";
//	}
	
	@GetMapping("/hello")
	
	public List<String> hello() {
		return Arrays.asList("Hello", "Gradle");
	}
	
	@GetMapping("/list")
	public List<Map<String, String>> home() {
		List<Map<String, String>> list = new ArrayList<>();
		Map<String, String> m1 = new HashMap<>();
		m1.put("name", "Neo");
		m1.put("addr", "Gangnam");
		m1.put("age", "13");
		list.add(m1);
		
		Map<String, String> m2 = new HashMap<>();
		m2.put("name", "Frodo");
		m2.put("addr", "Jongno");
		m2.put("age", "15");
		list.add(m2);
		
		return list;
		
	}
}
