export interface UserCurrent {
  uid: string;
  email: string | null;
  emailVerified: boolean;
  displayName: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
  isAnonymous: boolean;
  providerData: UserInfo[];
  metadata: {
    creationTime?: string;
    lastSignInTime?: string;
  };
  // Дополнительные кастомные поля, которые вы могли добавить через Firebase Admin SDK
  customData?: {
    role?: "admin" | "user" | "moderator";
    username?: string;
    bio?: string;
    // Добавьте другие кастомные поля по необходимости
  };
  // Токены и информация о провайдере
  stsTokenManager?: {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  };
  providerId: string;
  // Для мультиаккаунтинга
  tenantId?: string | null;
}

// Интерфейс для providerData (информация о провайдерах аутентификации)
export interface UserInfo {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  providerId: string;
  phoneNumber: string | null;
}
