package br.com.fifa.playermanagement.domain;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="players")
@Getter
@Setter
public class Player {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Basic
    @Column(nullable=false, length=50)
    private String name;

    private Date birthday;
    
    @Lob
    private byte[] picture;

    @OneToOne
    @JoinColumn(name="position_id", referencedColumnName = "id")
    private Position position;

}
