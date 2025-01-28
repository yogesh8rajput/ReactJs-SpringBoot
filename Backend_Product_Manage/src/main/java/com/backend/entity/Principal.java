package com.backend.entity;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class Principal implements UserDetails {

    private User user; 
    
    public Principal(User user) {
        this.user = user;
    }
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Ideally, you would return multiple roles if they exist, for now we assume a default role of "USER"
        return Collections.singletonList(new SimpleGrantedAuthority("USER"));
    }

    @Override
    public String getPassword() {
        return user.getPassword(); // Assuming User class has a getPass() method.
    }

    @Override
    public String getUsername() {
        return user.getUsername(); // Assuming User class has a getName() method.
    }
    
    @Override
    public boolean isAccountNonExpired() {
        return true; // You can add logic here for expiration check if needed.
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Add lock status check if necessary.
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Add logic for expired credentials if needed.
    }

    @Override
    public boolean isEnabled() {
        return true; // Add actual logic for account enabled check if needed.
    }
}
