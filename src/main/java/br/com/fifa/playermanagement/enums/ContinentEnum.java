package br.com.fifa.playermanagement.enums;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum ContinentEnum {

	AFRICA("África", 1),
	ASIA("Ásia", 2),
	EUROPA("EUROPA", 3),
	AMERICA_NORTE("América do Norte", 4),
	AMERICA_CENTRAL("América Central", 5),
	AMERICA_SUL("América do Sul", 6),
	OCEANIA("Oceania", 7);
	
	private String name;
	private Integer id;
	
	ContinentEnum(String name, Integer id) {
		this.name = name;
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public Integer getId() {
		return id;
	}
	
	
}
