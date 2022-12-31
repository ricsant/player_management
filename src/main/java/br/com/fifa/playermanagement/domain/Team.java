package br.com.fifa.playermanagement.domain;

import java.util.List;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="teams")
public class Team {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Basic
    @Column(unique=true, nullable=false, length=30)
    private String name;

    private Integer qtyTitle;
    
    @Lob
    private byte[] badge;

    private Long continentId;

    @OneToMany
    @JoinColumn(name="team_id")
    private List<Player> players;
    
}
