import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule ] ,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  isSignUp = false;
  showPassword = false;
  showSignupPassword = false;
  showConfirmPassword = false;
  
  loginData = {
    username: '',
    password: '',
    userType: 'student',
    remember: false
  };

  signupData = {
    fullName: '',
    email: '',
    campusId: '',
    userType: 'student',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  };

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleSignupPassword() {
    this.showSignupPassword = !this.showSignupPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  toggleForm(event: Event) {
    event.preventDefault();
    this.isSignUp = !this.isSignUp;
    
    // Reset forms when switching
    if (!this.isSignUp) {
      this.loginData = {
        username: '',
        password: '',
        userType: 'student',
        remember: false
      };
    } else {
      this.signupData = {
        fullName: '',
        email: '',
        campusId: '',
        userType: 'student',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
      };
    }
  }

  onLogin() {
    if (this.loginData.username && this.loginData.password) {
      console.log('Campus login attempt:', this.loginData);
      
      // Simulate different login flows based on user type
      switch(this.loginData.userType) {
        case 'student':
          alert(`Welcome Student! Redirecting to student dashboard...`);
          break;
        case 'staff':
          alert(`Welcome Staff Member! Redirecting to staff portal...`);
          break;
        case 'security':
          alert(`Welcome Security Personnel! Redirecting to security dashboard...`);
          break;
      }
    }
  }

  onSignUp() {
    if (this.signupData.password !== this.signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!this.signupData.agreeToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }

    console.log('Campus signup attempt:', this.signupData);
    
    // Simulate account creation
    alert(`Account created successfully! Welcome to CampusFind, ${this.signupData.fullName}. 
           A verification email has been sent to ${this.signupData.email}.`);
    
    // Auto-switch to login form after successful signup
    this.isSignUp = false;
    this.loginData.username = this.signupData.email;
  }

  // Password strength indicator methods
  getPasswordStrengthWidth(): string {
    const password = this.signupData.password;
    if (password.length === 0) return '0%';
    if (password.length < 6) return '25%';
    if (password.length < 8) return '50%';
    if (password.length < 10) return '75%';
    return '100%';
  }

  getPasswordStrengthText(): string {
    const password = this.signupData.password;
    if (password.length === 0) return '';
    if (password.length < 6) return 'Weak password';
    if (password.length < 8) return 'Fair password';
    if (password.length < 10) return 'Good password';
    return 'Strong password';
  }

  get passwordStrength(): string {
    const password = this.signupData.password;
    if (password.length < 6) return 'weak';
    if (password.length < 8) return 'medium';
    return 'strong';
  }
}