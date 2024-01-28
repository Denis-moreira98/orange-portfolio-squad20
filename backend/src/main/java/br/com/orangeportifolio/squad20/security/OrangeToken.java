package br.com.orangeportifolio.squad20.security;

public class OrangeToken {
	
	private String token;

	public OrangeToken(String token) {
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}
