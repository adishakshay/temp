package com.example.backend.config;

import com.example.backend.model.Signup;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class UserInfoUserDetails implements UserDetails {

    String firstName;
    String lastName;
    String password;
    String confirmPassword;
    List<GrantedAuthority> authorities;

    public UserInfoUserDetails(Signup signup) {
        firstName = signup.getFirstName();
        lastName = signup.getLastName();
        password = signup.getPassword();
        confirmPassword = signup.getConfirmPassword();
        authorities = Arrays.stream(signup.getRole().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    // @Override
    // public String getConfirmPassword() {
    //     return confirmPassword;
    // }

    @Override
    public String getUsername() {
        return firstName;
    }

    // @Override
    // public String getLastName() {
    //     return firstName;
    // }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}