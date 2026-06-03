# PowerPocket — Controlled Financial Access

A production-ready fintech platform for the Indonesian market that enables families to share funds temporarily without sharing bank credentials.

## 🎯 Concept

PowerPocket allows parents/family members to create temporary fund access using **QR Access Token + PIN Verification**, providing a secure way to transfer purchasing power without exposing bank accounts or cards.

## 🏗️ Architecture

### Three User Experiences

1. **Mobile App (Sender)**
   - Create and manage access tokens
   - Set amount, expiry, merchant scope, and PIN
   - Track active, redeemed, expired, and revoked access
   - Real-time notifications

2. **Receiver Experience**
   - No app required
   - View QR code and PIN via WhatsApp
   - Simple redemption flow at merchant

3. **Merchant Web Portal**
   - Desktop-optimized dashboard
   - QR code scanner with animation
   - PIN verification system
   - Transaction history and statistics

## 🎨 Design System

### Brand Identity
- **Primary Color**: #0D5B4F (Deep Teal)
- **Secondary Color**: #84D98C (Soft Green)
- **Typography**: Plus Jakarta Sans
- **UI Style**: Rounded 20px corners, soft shadows, spacious layouts

### Key Features
- ✅ Toast notifications with Sonner
- ✅ Loading skeletons and empty states
- ✅ Revoke confirmation dialog
- ✅ QR scan animation
- ✅ Status badges and indicators
- ✅ Responsive design (mobile-first + desktop merchant portal)
- ✅ Realistic Indonesian data and currency formatting

## 📱 User Flows

### Sender Flow
1. Login → Dashboard
2. Create Access → Configure (amount, expiry, merchant)
3. Set Security (PIN)
4. Review → Generate QR
5. Share via WhatsApp
6. Track and manage active access

### Merchant Flow
1. Login to portal
2. Scan customer QR code
3. Verify PIN
4. Release funds
5. Success confirmation

## 🚀 Routes

### Mobile App
- `/` - Splash screen
- `/login` - Authentication
- `/dashboard` - Main dashboard
- `/create-access` - New access flow
- `/configure-access` - Set amount and limits
- `/security` - PIN setup
- `/review` - Summary before creation
- `/access-generated` - Success with QR
- `/active-access/:id` - Access details
- `/extend-access/:id` - Extend expiry
- `/history` - Transaction history (tabs: Active, Redeemed, Expired, Revoked)
- `/profile` - User settings
- `/notifications` - Activity feed

### Receiver
- `/receiver/:token` - QR display page

### Merchant Portal
- `/merchant` - Login
- `/merchant/dashboard` - Statistics and transactions
- `/merchant/scan` - QR scanner
- `/merchant/verification` - PIN input
- `/merchant/release` - Confirm release
- `/merchant/success` - Transaction complete

## 🛠️ Tech Stack

- **Framework**: React 18 + React Router 7
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **QR Codes**: qrcode.react
- **Notifications**: Sonner
- **Build Tool**: Vite

## 📦 Key Dependencies

```json
{
  "react-router": "7.13.0",
  "tailwindcss": "4.1.12",
  "lucide-react": "0.487.0",
  "qrcode.react": "4.2.0",
  "sonner": "2.0.3"
}
```

## 🎯 Production Features

- Real-time status tracking
- Secure PIN verification
- Automatic fund return on expiry/revoke
- Transaction history and audit trail
- Notification system
- Empty states and error handling
- Loading animations
- Responsive across all devices

## 🌏 Indonesian Market Ready

- Currency formatting: Rp500.000, Rp1.250.000
- Realistic Indonesian names and data
- Merchant integration: Alfamart, Indomaret
- WIB timezone display
- WhatsApp integration for sharing

## 🔐 Security Features

- PIN-based verification
- Merchant scope restrictions
- Time-based expiry
- Revocation capability
- Held funds system
- Transaction reference tracking

## 📊 Merchant Dashboard Stats

- Today's transactions
- Funds released
- Pending verifications
- Recent transaction table
- Quick scan CTA

---

**Status**: Production-ready prototype for investor presentation and Indonesian fintech market launch.
