import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Smartphone, 
  Shield, 
  Users, 
  CreditCard, 
  Building2,
  Monitor,
  Clock
} from "lucide-react";

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
  transactions: Array<{
    id: string;
    amount: string;
    currency: string;
    date: string;
    status: string;
    recipient: string;
  }>;
  bankAccounts: {
    gbp?: { accountNumber: string; sortCode: string; };
    eur?: { iban: string; bic: string; };
    ngn?: { accountNumber: string; bankName: string; };
  };
}

export function InfoCards({
  preferredDestinations,
  deviceOverview,
  deviceBreakdown,
  accountVerification,
  referralInfo,
  transactions,
  bankAccounts
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Preferred Destinations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Preferred Destination Countries</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {preferredDestinations.map((country) => (
              <Badge key={country} variant="secondary">
                {country}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Device Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Smartphone className="w-5 h-5 text-primary" />
            <span>Device Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">App Version:</span>
            <span className="font-medium">{deviceOverview.appVersion}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Operating System:</span>
            <span className="font-medium">{deviceOverview.os}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Plus Code:</span>
            <span className="font-medium font-mono text-sm">{deviceOverview.plusCode}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Device Name:</span>
            <span className="font-medium">{deviceOverview.deviceName}</span>
          </div>
        </CardContent>
      </Card>

      {/* Device Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Monitor className="w-5 h-5 text-primary" />
            <span>Device Breakdown</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {deviceBreakdown.slice(0, 2).map((device, index) => (
              <div key={device.deviceId} className="p-3 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Device {index + 1}</span>
                  <Badge variant="outline">{device.version}</Badge>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>ID: {device.deviceId.substring(0, 20)}...</p>
                  <p>Last Login: {device.lastLoginTime}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Account Verification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-primary" />
            <span>Account Verification</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {accountVerification.map((verification, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{verification.verificationType}</p>
                  <p className="text-sm text-muted-foreground">{verification.timeVerified}</p>
                </div>
                <Badge className={getStatusColor(verification.status)}>
                  {verification.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Referral Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-primary" />
            <span>Referral Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {referralInfo.referredBy && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Referred By:</span>
              <span className="font-medium">{referralInfo.referredBy}</span>
            </div>
          )}
          {referralInfo.referredFrom && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Referred From:</span>
              <span className="font-medium">{referralInfo.referredFrom}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-muted-foreground">Referral Code:</span>
            <span className="font-medium font-mono text-sm">{referralInfo.referralCode}</span>
          </div>
        </CardContent>
      </Card>

      {/* Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-primary" />
              <span>Recent Transactions</span>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transactions.slice(0, 5).map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-2 border border-border rounded">
                <div>
                  <p className="font-medium">{transaction.amount} {transaction.currency}</p>
                  <p className="text-sm text-muted-foreground">to {transaction.recipient}</p>
                </div>
                <div className="text-right">
                  <Badge className={getStatusColor(transaction.status)} variant="outline">
                    {transaction.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bank Account Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building2 className="w-5 h-5 text-primary" />
            <span>Bank Account Details</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bankAccounts.gbp && (
              <div className="p-3 border border-border rounded-lg">
                <h4 className="font-medium mb-2">GBP Account</h4>
                <div className="text-sm space-y-1">
                  <p><span className="text-muted-foreground">Account Number:</span> {bankAccounts.gbp.accountNumber}</p>
                  <p><span className="text-muted-foreground">Sort Code:</span> {bankAccounts.gbp.sortCode}</p>
                </div>
              </div>
            )}
            {bankAccounts.eur && (
              <div className="p-3 border border-border rounded-lg">
                <h4 className="font-medium mb-2">EUR Account</h4>
                <div className="text-sm space-y-1">
                  <p><span className="text-muted-foreground">IBAN:</span> {bankAccounts.eur.iban}</p>
                  <p><span className="text-muted-foreground">BIC:</span> {bankAccounts.eur.bic}</p>
                </div>
              </div>
            )}
            {bankAccounts.ngn && (
              <div className="p-3 border border-border rounded-lg">
                <h4 className="font-medium mb-2">NGN Account</h4>
                <div className="text-sm space-y-1">
                  <p><span className="text-muted-foreground">Account Number:</span> {bankAccounts.ngn.accountNumber}</p>
                  <p><span className="text-muted-foreground">Bank Name:</span> {bankAccounts.ngn.bankName}</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}