import { AccountOverviewTabs } from "@/GlobalCustomerDetails/components/AccountOverviewTabs";
import { InfoCards } from "@/GlobalCustomerDetails/components/InfoCards";
import styles from "./GlobalCustomerDetails.module.scss";

// Mock data for demonstration
const mockUser = {
  firstName: "Sarah",
  lastName: "Johnson",
  dateOfBirth: "March 15, 1990",
  countryOfResidence: "United Kingdom",
  language: "English",
  phoneNumber: "+44 7700 900123",
  emailAddress: "sarah.johnson@email.com",
  timeCreated: "January 10, 2023",
  lastLoginDate: "September 23, 2024 - 2:30 PM",
  userId: "usr_7f8a9b1c2d3e4f5g6h7i8j9k0l1m2n3o",
  kycStatus: "Verified" as const,
};

const mockData = {
  preferredDestinations: [
    "United Kingdom",
    "Canada",
    "France",
    "Germany",
    "Australia",
  ],
  deviceOverview: {
    appVersion: "2.4.1",
    os: "iOS 17.1",
    plusCode: "9C3XGW2J+2VX",
    deviceName: "Sarah's iPhone 14 Pro",
  },
  deviceBreakdown: [
    {
      deviceId: "dev_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
      createdAt: "2023-01-10",
      updatedAt: "2024-09-20",
      version: "2.4.1",
      lastLoginTime: "2024-09-23 14:30",
    },
    {
      deviceId: "dev_z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4",
      createdAt: "2023-06-15",
      updatedAt: "2024-08-12",
      version: "2.3.8",
      lastLoginTime: "2024-08-12 09:15",
    },
  ],
  accountVerification: [
    {
      verificationType: "Identity Verification",
      status: "Verified",
      timeVerified: "2023-01-15 10:30",
    },
    {
      verificationType: "Address Verification",
      status: "Verified",
      timeVerified: "2023-01-16 14:22",
    },
    {
      verificationType: "Phone Verification",
      status: "Verified",
      timeVerified: "2023-01-10 16:45",
    },
  ],
  referralInfo: {
    referredBy: "Mike Thompson",
    referredFrom: "Social Media",
    referralCode: "REF_SJ2023_XY789",
  },
  transactions: [
    {
      id: "txn_001",
      amount: "£850.00",
      currency: "GBP",
      date: "Sep 23, 2024",
      status: "Completed",
      recipient: "John Smith (FR)",
    },
    {
      id: "txn_002",
      amount: "€1,200.00",
      currency: "EUR",
      date: "Sep 20, 2024",
      status: "Completed",
      recipient: "Marie Dubois (FR)",
    },
    {
      id: "txn_003",
      amount: "£450.00",
      currency: "GBP",
      date: "Sep 18, 2024",
      status: "Pending",
      recipient: "David Wilson (CA)",
    },
    {
      id: "txn_004",
      amount: "$750.00",
      currency: "USD",
      date: "Sep 15, 2024",
      status: "Completed",
      recipient: "Emma Brown (US)",
    },
    {
      id: "txn_005",
      amount: "£325.00",
      currency: "GBP",
      date: "Sep 12, 2024",
      status: "Completed",
      recipient: "James Miller (AU)",
    },
  ],
  bankAccounts: {
    gbp: { accountNumber: "12345678", sortCode: "12-34-56" },
    eur: { iban: "GB29 NWBK 6016 1331 9268 19", bic: "NWBKGB2L" },
    ngn: { accountNumber: "1234567890", bankName: "First Bank of Nigeria" },
  },
};

export default function Index() {
  return (
    <div className={styles.fullWidthContainer}>
      {/* Main Content */}
      <main className={styles.content}>
        {/* Account Overview Tabs - Main Focus */}
        <AccountOverviewTabs
          user={mockUser}
          transactions={mockData.transactions}
        />

        {/* Additional Information Cards */}
        <InfoCards
          preferredDestinations={mockData.preferredDestinations}
          deviceOverview={mockData.deviceOverview}
          deviceBreakdown={mockData.deviceBreakdown}
          accountVerification={mockData.accountVerification}
          referralInfo={mockData.referralInfo}
          bankAccounts={mockData.bankAccounts}
        />
      </main>
    </div>
  );
}
