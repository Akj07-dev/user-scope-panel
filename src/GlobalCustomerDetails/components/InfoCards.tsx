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
import styles from "../GlobalCustomerDetails.module.scss";

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

  return (
    <div className={styles.gridCols1Lg2}>
      {/* Preferred Destinations */}
      <Card>
        <CardHeader>
          <CardTitle className={styles.flexItemsCenterGap2}>
            <MapPin
              className={`${styles.w5} ${styles.h5} ${styles.textPrimary}`}
            />
            <span>Preferred Destination Countries</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={styles.flexWrap}>
            {preferredDestinations.map((country) => (
              <Badge key={country} variant="secondary">
                {country}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Account Verification */}
      <Card>
        <CardHeader>
          <CardTitle className={styles.flexItemsCenterGap2}>
            <Shield
              className={`${styles.w5} ${styles.h5} ${styles.textPrimary}`}
            />
            <span>Account Verification</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={styles.spaceY3}>
            {accountVerification.map((verification, index) => (
              <div key={index} className={styles.flexItemsCenterJustifyBetween}>
                <div>
                  <p className={styles.fontMedium}>
                    {verification.verificationType}
                  </p>
                  <p
                    className={`${styles.textSm} ${styles.textMutedForeground}`}
                  >
                    {verification.timeVerified}
                  </p>
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
      <Card>
        <CardHeader>
          <CardTitle className={styles.flexItemsCenterGap2}>
            <Building2
              className={`${styles.w5} ${styles.h5} ${styles.textPrimary}`}
            />
            <span>Bank Account Details</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={styles.spaceY4}>
            {bankAccounts.gbp && (
              <div
                className={`${styles.p3} ${styles.borderBorder} ${styles.roundedLg}`}
              >
                <h4 className={`${styles.fontMedium} ${styles.mb2}`}>
                  GBP Account
                </h4>
                <div className={`${styles.textSm} ${styles.spaceY1}`}>
                  <p>
                    <span className={styles.textMutedForeground}>
                      Account Number:
                    </span>{" "}
                    {bankAccounts.gbp.accountNumber}
                  </p>
                  <p>
                    <span className={styles.textMutedForeground}>
                      Sort Code:
                    </span>{" "}
                    {bankAccounts.gbp.sortCode}
                  </p>
                </div>
              </div>
            )}
            {bankAccounts.eur && (
              <div
                className={`${styles.p3} ${styles.borderBorder} ${styles.roundedLg}`}
              >
                <h4 className={`${styles.fontMedium} ${styles.mb2}`}>
                  EUR Account
                </h4>
                <div className={`${styles.textSm} ${styles.spaceY1}`}>
                  <p>
                    <span className={styles.textMutedForeground}>IBAN:</span>{" "}
                    {bankAccounts.eur.iban}
                  </p>
                  <p>
                    <span className={styles.textMutedForeground}>BIC:</span>{" "}
                    {bankAccounts.eur.bic}
                  </p>
                </div>
              </div>
            )}
            {bankAccounts.ngn && (
              <div
                className={`${styles.p3} ${styles.borderBorder} ${styles.roundedLg}`}
              >
                <h4 className={`${styles.fontMedium} ${styles.mb2}`}>
                  NGN Account
                </h4>
                <div className={`${styles.textSm} ${styles.spaceY1}`}>
                  <p>
                    <span className={styles.textMutedForeground}>
                      Account Number:
                    </span>{" "}
                    {bankAccounts.ngn.accountNumber}
                  </p>
                  <p>
                    <span className={styles.textMutedForeground}>
                      Bank Name:
                    </span>{" "}
                    {bankAccounts.ngn.bankName}
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Referral Information */}
      <Card>
        <CardHeader>
          <CardTitle className={styles.flexItemsCenterGap2}>
            <Users
              className={`${styles.w5} ${styles.h5} ${styles.textPrimary}`}
            />
            <span>Referral Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className={styles.spaceY3}>
          {referralInfo.referredBy && (
            <div className={styles.flexBetween}>
              <span className={styles.textMutedForeground}>Referred By:</span>
              <span className={styles.fontMedium}>
                {referralInfo.referredBy}
              </span>
            </div>
          )}
          {referralInfo.referredFrom && (
            <div className={styles.flexBetween}>
              <span className={styles.textMutedForeground}>Referred From:</span>
              <span className={styles.fontMedium}>
                {referralInfo.referredFrom}
              </span>
            </div>
          )}
          <div className={styles.flexBetween}>
            <span className={styles.textMutedForeground}>Referral Code:</span>
            <span
              className={`${styles.fontMedium} ${styles.fontMono} ${styles.textSm}`}
            >
              {referralInfo.referralCode}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Device Overview */}
      <Card>
        <CardHeader>
          <CardTitle className={styles.flexItemsCenterGap2}>
            <Smartphone
              className={`${styles.w5} ${styles.h5} ${styles.textPrimary}`}
            />
            <span>Device Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent className={styles.spaceY3}>
          <div className={styles.flexBetween}>
            <span className={styles.textMutedForeground}>App Version:</span>
            <span className={styles.fontMedium}>
              {deviceOverview.appVersion}
            </span>
          </div>
          <div className={styles.flexBetween}>
            <span className={styles.textMutedForeground}>
              Operating System:
            </span>
            <span className={styles.fontMedium}>{deviceOverview.os}</span>
          </div>
          <div className={styles.flexBetween}>
            <span className={styles.textMutedForeground}>Plus Code:</span>
            <span
              className={`${styles.fontMedium} ${styles.fontMono} ${styles.textSm}`}
            >
              {deviceOverview.plusCode}
            </span>
          </div>
          <div className={styles.flexBetween}>
            <span className={styles.textMutedForeground}>Device Name:</span>
            <span className={styles.fontMedium}>
              {deviceOverview.deviceName}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Device Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className={styles.flexItemsCenterGap2}>
            <Monitor
              className={`${styles.w5} ${styles.h5} ${styles.textPrimary}`}
            />
            <span>Device Breakdown</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={styles.spaceY4}>
            {deviceBreakdown.slice(0, 2).map((device, index) => (
              <div
                key={device.deviceId}
                className={`${styles.p3} ${styles.borderBorder} ${styles.roundedLg}`}
              >
                <div
                  className={`${styles.flexBetween} ${styles.flexItemsCenter} ${styles.mb2}`}
                >
                  <span className={`${styles.textSm} ${styles.fontMedium}`}>
                    Device {index + 1}
                  </span>
                  <Badge variant="outline">{device.version}</Badge>
                </div>
                <div
                  className={`${styles.textXs} ${styles.textMutedForeground} ${styles.spaceY1}`}
                >
                  <p>ID: {device.deviceId.substring(0, 20)}...</p>
                  <p>Last Login: {device.lastLoginTime}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
