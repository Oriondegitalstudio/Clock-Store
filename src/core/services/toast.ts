import { Injectable, signal } from '@angular/core';
import { Toast } from '../../shared/interfaces/Toast';
import { ToastType } from '../../shared/types/ToastType';

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<Toast[]>([]);
  private nextId = 0;
  show(title: string, message: string, type: ToastType = 'info', duration = 4500): void {
    const id = ++this.nextId;
    this.toasts.update((items) => [...items, { id, title, message, type }]);
    window.setTimeout(() => this.dismiss(id), duration);
  }
  success(title: string, message: string): void {
    this.show(title, message, 'success');
  }
  error(title: string, message: string): void {
    this.show(title, message, 'error');
  }
  dismiss(id: number): void {
    this.toasts.update((items) => items.filter((item) => item.id !== id));
  }
}
