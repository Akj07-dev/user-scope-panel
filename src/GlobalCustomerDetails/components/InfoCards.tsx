import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/GlobalCustomerDetails/components/ui/card";
import { Badge } from "@/GlobalCustomerDetails/components/ui/badge";
import { Button } from "@/GlobalCustomerDetails/components/ui/button";
import {
  MapPin,
  Smartphone,
  Shield,
  Users,
  CreditCard,
  Building2,
  Monitor,
  Clock,
} from "lucide-react";
import styles from "./InfoCards.module.scss";

interface InfoCardsProps {
  preferredDestinations: string[];
  deviceOverview: {
    appVersion: string;
    os: string;
    plusCode: string;
    deviceName: string;
  };
  deviceBreakdown: Array<{
    deviceId: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    version: string;
    lastLoginTime: string;
  }>;
  accountVerification: Array<{
    verificationType: string;
    status: string;
    timeVerified: string;
  }>;
  referralInfo: {
    referredBy?: string;
    referredFrom?: string;
    referralCode: string;
  };
  bankAccounts: {
    gbp?: { accountNumber: string; sortCode: string };
    eur?: { iban: string; bic: string };
    ngn?: { accountNumber: string; bankName: string };
  };
}

export function InfoCards({
  preferredDestinations,
  deviceOverview,
  deviceBreakdown,
  accountVerification,
  referralInfo,
  bankAccounts,
}: InfoCardsProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "verified":
      case "completed":
      case "success":
        return "bg-success text-success-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      case "failed":
      case "rejected":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  // Color variants for destination pills
  const pillColors = ['blue', 'emerald', 'purple', 'orange', 'pink', 'indigo', 'teal', 'rose'];
  
  const getRandomPillColor = (index: number) => {
    return pillColors[index % pillColors.length];
  };

  return (
    <div className={styles.cardsGrid}>
      {/* Preferred Destinations */}
      <Card className={styles.infoCard}>
        <CardHeader className={styles.cardHeader}>
          <div className={styles.cardTitleContainer}>
            <MapPin className={styles.cardIcon} />
            <CardTitle className={styles.cardTitle}>Preferred Destination Countries</CardTitle>
          </div>
        </CardHeader>
        <CardContent className={styles.cardContent}>
          <div className={styles.destinationPills}>
            {preferredDestinations.map((country, index) => (
              <div 
                key={country} 
                className={`${styles.destinationPill} ${styles[getRandomPillColor(index)]}`}
              >
                {country}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Account Verification */}
      <Card className={styles.infoCard}>
        <CardHeader className={styles.cardHeader}>
          <div className={styles.cardTitleContainer}>
            <Shield className={styles.cardIcon} />
            <CardTitle className={styles.cardTitle}>Account Verification</CardTitle>
          </div>
        </CardHeader>
        <CardContent className={styles.cardContent}>
          <div className={styles.verificationList}>
            {accountVerification.map((verification, index) => (
              <div key={index} className={styles.verificationItem}>
                <div className={styles.verificationInfo}>
                  <div className={styles.verificationType}>
                    {verification.verificationType}
                  </div>
                  <div className={styles.verificationTime}>
                    {verification.timeVerified}
                  </div>
                </div>
                <Badge className={getStatusColor(verification.status)}>
                  {verification.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bank Account Details */}
      <Card className={styles.infoCard}>
        <CardHeader className={styles.cardHeader}>
          <div className={styles.cardTitleContainer}>
            <Building2 className={styles.cardIcon} />
            <CardTitle className={styles.cardTitle}>Bank Account Details</CardTitle>
          </div>
        </CardHeader>
        <CardContent className={styles.cardContent}>
          <div className={styles.bankAccountsList}>
            {bankAccounts.gbp && (
              <div className={styles.bankAccount}>
                <div className={styles.bankAccountTitle}>GBP Account</div>
                <div className={styles.bankAccountDetails}>
                  <div className={styles.bankAccountDetail}>
                    <span className={styles.label}>Account Number: </span>
                    <span className={styles.value}>{bankAccounts.gbp.accountNumber}</span>
                  </div>
                  <div className={styles.bankAccountDetail}>
                    <span className={styles.label}>Sort Code: </span>
                    <span className={styles.value}>{bankAccounts.gbp.sortCode}</span>
                  </div>
                </div>
              </div>
            )}
            {bankAccounts.eur && (
              <div className={styles.bankAccount}>
                <div className={styles.bankAccountTitle}>EUR Account</div>
                <div className={styles.bankAccountDetails}>
                  <div className={styles.bankAccountDetail}>
                    <span className={styles.label}>IBAN: </span>
                    <span className={styles.value}>{bankAccounts.eur.iban}</span>
                  </div>
                  <div className={styles.bankAccountDetail}>
                    <span className={styles.label}>BIC: </span>
                    <span className={styles.value}>{bankAccounts.eur.bic}</span>
                  </div>
                </div>
              </div>
            )}
            {bankAccounts.ngn && (
              <div className={styles.bankAccount}>
                <div className={styles.bankAccountTitle}>NGN Account</div>
                <div className={styles.bankAccountDetails}>
                  <div className={styles.bankAccountDetail}>
                    <span className={styles.label}>Account Number: </span>
                    <span className={styles.value}>{bankAccounts.ngn.accountNumber}</span>
                  </div>
                  <div className={styles.bankAccountDetail}>
                    <span className={styles.label}>Bank Name: </span>
                    <span className={styles.value}>{bankAccounts.ngn.bankName}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Referral Information */}
      <Card className={styles.infoCard}>
        <CardHeader className={styles.cardHeader}>
          <div className={styles.cardTitleContainer}>
            <Users className={styles.cardIcon} />
            <CardTitle className={styles.cardTitle}>Referral Information</CardTitle>
          </div>
        </CardHeader>
        <CardContent className={styles.cardContent}>
          <div className={styles.referralList}>
            {referralInfo.referredBy && (
              <div className={styles.referralItem}>
                <span className={styles.referralLabel}>Referred By:</span>
                <span className={styles.referralValue}>
                  {referralInfo.referredBy}
                </span>
              </div>
            )}
            {referralInfo.referredFrom && (
              <div className={styles.referralItem}>
                <span className={styles.referralLabel}>Referred From:</span>
                <span className={styles.referralValue}>
                  {referralInfo.referredFrom}
                </span>
              </div>
            )}
            <div className={styles.referralItem}>
              <span className={styles.referralLabel}>Referral Code:</span>
              <span className={`${styles.referralValue} ${styles.code}`}>
                {referralInfo.referralCode}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Device Overview */}
      <Card className={styles.infoCard}>
        <CardHeader className={styles.cardHeader}>
          <div className={styles.cardTitleContainer}>
            <Smartphone className={styles.cardIcon} />
            <CardTitle className={styles.cardTitle}>Device Overview</CardTitle>
          </div>
        </CardHeader>
        <CardContent className={styles.cardContent}>
          <div className={styles.deviceOverviewList}>
            <div className={styles.deviceOverviewItem}>
              <span className={styles.deviceLabel}>App Version:</span>
              <span className={styles.deviceValue}>
                {deviceOverview.appVersion}
              </span>
            </div>
            <div className={styles.deviceOverviewItem}>
              <span className={styles.deviceLabel}>Operating System:</span>
              <span className={styles.deviceValue}>{deviceOverview.os}</span>
            </div>
            <div className={styles.deviceOverviewItem}>
              <span className={styles.deviceLabel}>Plus Code:</span>
              <span className={`${styles.deviceValue} ${styles.code}`}>
                {deviceOverview.plusCode}
              </span>
            </div>
            <div className={styles.deviceOverviewItem}>
              <span className={styles.deviceLabel}>Device Name:</span>
              <span className={styles.deviceValue}>
                {deviceOverview.deviceName}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Device Breakdown */}
      <Card className={styles.infoCard}>
        <CardHeader className={styles.cardHeader}>
          <div className={styles.cardTitleContainer}>
            <Monitor className={styles.cardIcon} />
            <CardTitle className={styles.cardTitle}>Device Breakdown</CardTitle>
          </div>
        </CardHeader>
        <CardContent className={styles.cardContent}>
          <div className={styles.deviceBreakdownList}>
            {deviceBreakdown.slice(0, 2).map((device, index) => (
              <div
                key={device.deviceId}
                className={styles.deviceBreakdownItem}
              >
                <div className={styles.deviceBreakdownHeader}>
                  <span className={styles.deviceName}>
                    Device {index + 1}
                  </span>
                  <div className={styles.deviceVersion}>{device.version}</div>
                </div>
                <div className={styles.deviceBreakdownDetails}>
                  <div className={styles.deviceDetail}>
                    ID: <span className={styles.deviceId}>{device.deviceId.substring(0, 20)}...</span>
                  </div>
                  <div className={styles.deviceDetail}>
                    Last Login: {device.lastLoginTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
