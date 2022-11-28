package com.fatec.sig1.adapters;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class GUIMenuController {

	@GetMapping("/")
	public ModelAndView home() {
		return new ModelAndView("paginaMenu");
	}
	
	@GetMapping("/login")
	public String autenticacao() {
		return "paginaLogin";
	}
}