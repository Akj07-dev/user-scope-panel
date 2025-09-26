import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/GlobalCustomerDetails/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/GlobalCustomerDetails/components/ui/card";
import { Badge } from "@/GlobalCustomerDetails/components/ui/badge";
import { Button } from "@/GlobalCustomerDetails/components/ui/button";
import { User, CreditCard, TrendingUp, Clock, ArrowUpRight, Edit, Shield, FileText, CheckCircle, AlertTriangle, KeyRound } from "lucide-react";
import styles from "./AccountOverviewTabs.module.scss";

interface User {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  countryOfResidence: string;
  language: string;
  phoneNumber: string;
  emailAddress: string;
  timeCreated: string;
  lastLoginDate: string;
  userId: string;
  kycStatus: "Verified" | "Pending" | "Rejected";
}

interface Transaction {
  id: string;
  amount: string;
  currency: string;
  date: string;
  status: string;
  recipient: string;
}

interface AccountOverviewTabsProps {
  user: User;
  transactions: Transaction[];
}

export function AccountOverviewTabs({
  user,
  transactions,
}: AccountOverviewTabsProps) {
  const getKycStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "verified":
        return "bg-success text-success-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      case "rejected":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTransactionStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-success text-success-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      case "failed":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className={styles.tabsWrapper}>
      <Tabs defaultValue="account-details" className={styles.tabsContainer}>
        <TabsList className={styles.tabsList}>
          <TabsTrigger value="account-details" className={styles.tabsTrigger}>
            <User className={styles.tabIcon} />
            <span>Account Details</span>
          </TabsTrigger>
          <TabsTrigger value="transactions" className={styles.tabsTrigger}>
            <TrendingUp className={styles.tabIcon} />
            <span>Recent Transactions</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account-details" className={styles.tabsContent}>
          <Card className={styles.actionsCard}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className={styles.actionsContent}>
              <div className={styles.actionsGrid}>
                <Button variant="outline" className={styles.actionButton}>
                  <Edit className={styles.actionIcon} />
                  <span>Edit User Details</span>
                </Button>
                <Button variant="outline" className={styles.actionButton}>
                  <Shield className={styles.actionIcon} />
                  <span>Update Status</span>
                </Button>
                <Button variant="outline" className={styles.actionButton}>
                  <FileText className={styles.actionIcon} />
                  <span>Send Account Statement</span>
                </Button>
                <Button variant="outline" className={styles.actionButton}>
                  <CheckCircle className={styles.actionIcon} />
                  <span>Verify Customer</span>
                </Button>
                <Button variant="outline" className={styles.actionButton}>
                  <AlertTriangle className={styles.actionIcon} />
                  <span>Update Risk Level</span>
                </Button>
                <Button variant="outline" className={styles.actionButton}>
                  <KeyRound className={styles.actionIcon} />
                  <span>Force Password Reset</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className={styles.detailsCard}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>
                <span>Personal Information</span>
                <Badge className={getKycStatusColor(user.kycStatus)}>
                  {user.kycStatus}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className={styles.detailsContent}>
              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Date of Birth</span>
                  <span className={styles.detailValue}>{user.dateOfBirth}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Language</span>
                  <span className={styles.detailValue}>{user.language}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className={styles.tabsContent}>
          <Card className={styles.transactionsCard}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>
                <span>Recent Transactions</span>
                <Button variant="outline" size="sm" className={styles.viewAllButton}>
                  View All
                  <ArrowUpRight className={styles.buttonIcon} />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className={styles.transactionsContent}>
              <div className={styles.transactionsList}>
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className={styles.transactionItem}
                  >
                    <div className={styles.transactionMain}>
                      <div className={styles.transactionAmount}>
                        {transaction.amount}
                      </div>
                      <div className={styles.transactionRecipient}>
                        to {transaction.recipient}
                      </div>
                    </div>
                    <div className={styles.transactionDetails}>
                      <Badge
                        className={getTransactionStatusColor(transaction.status)}
                      >
                        {transaction.status}
                      </Badge>
                      <div className={styles.transactionDate}>
                        <Clock className={styles.dateIcon} />
                        {transaction.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
