import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import {
  ArrowRight,
  Box,
  CheckCircle,
  Eye,
  Key,
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  Mail,
  ArrowUpRight,
  LogIn,
  LockKeyhole,
  EyeClosed,
} from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, LucideAngularModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({
        Mail,
        Key,
        Eye,
        ArrowRight,
        LogIn,
        ArrowUpRight,
        LockKeyhole,
        EyeClosed,
      }),
    },
  ],
})
export class Login {
  isPasswordVisible = signal(false);

  togglePasswordVisibility() {
    this.isPasswordVisible.set(!this.isPasswordVisible());
  }
  onLogin() {
    console.log('HELLO');
  }
}
