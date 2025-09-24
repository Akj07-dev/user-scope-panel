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
import { User, CreditCard } from "lucide-react";
import styles from "../GlobalCustomerDetails.module.scss";

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
    <Tabs defaultValue="account-details" className={styles.tabsContainer}>
      <TabsList className={styles.tabsList}>
        <TabsTrigger value="account-details" className={styles.tabsTrigger}>
          <User className={`${styles.w4} ${styles.h4}`} />
          <span>Account Details</span>
        </TabsTrigger>
        <TabsTrigger value="transactions" className={styles.tabsTrigger}>
          <CreditCard className={`${styles.w4} ${styles.h4}`} />
          <span>Recent Transactions</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="account-details" className={styles.tabsContent}>
        <Card>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <span>Account Details</span>
              <Badge className={getKycStatusColor(user.kycStatus)}>
                {user.kycStatus}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={styles.gridCols1Md2}>
              <div className={styles.spaceY4}>
                <div>
                  <p
                    className={`${styles.textSm} ${styles.textMutedForeground}`}
                  >
                    First Name
                  </p>
                  <p className={styles.fontMedium}>{user.firstName}</p>
                </div>
                <div>
                  <p
                    className={`${styles.textSm} ${styles.textMutedForeground}`}
                  >
                    Last Name
                  </p>
                  <p className={styles.fontMedium}>{user.lastName}</p>
                </div>
                <div>
                  <p
                    className={`${styles.textSm} ${styles.textMutedForeground}`}
                  >
                    Date of Birth
                  </p>
                  <p className={styles.fontMedium}>{user.dateOfBirth}</p>
                </div>
                <div>
                  <p
                    className={`${styles.textSm} ${styles.textMutedForeground}`}
                  >
                    Country of Residence
                  </p>
                  <p className={styles.fontMedium}>{user.countryOfResidence}</p>
                </div>
                <div>
                  <p
                    className={`${styles.textSm} ${styles.textMutedForeground}`}
                  >
                    Language
                  </p>
                  <p className={styles.fontMedium}>{user.language}</p>
                </div>
              </div>
              <div className={styles.spaceY4}>
                <div>
                  <p
                    className={`${styles.textSm} ${styles.textMutedForeground}`}
                  >
                    Phone Number
                  </p>
                  <p className={styles.fontMedium}>{user.phoneNumber}</p>
                </div>
                <div>
                  <p
                    className={`${styles.textSm} ${styles.textMutedForeground}`}
                  >
                    Email Address
                  </p>
                  <p className={styles.fontMedium}>{user.emailAddress}</p>
                </div>
                <div>
                  <p
                    className={`${styles.textSm} ${styles.textMutedForeground}`}
                  >
                    Time Created
                  </p>
                  <p className={styles.fontMedium}>{user.timeCreated}</p>
                </div>
                <div>
                  <p
                    className={`${styles.textSm} ${styles.textMutedForeground}`}
                  >
                    Last Login Date
                  </p>
                  <p className={styles.fontMedium}>{user.lastLoginDate}</p>
                </div>
                <div>
                  <p
                    className={`${styles.textSm} ${styles.textMutedForeground}`}
                  >
                    User ID
                  </p>
                  <p
                    className={`${styles.fontMedium} ${styles.fontMono} ${styles.textXs} ${styles.breakAll}`}
                  >
                    {user.userId}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="transactions" className={styles.tabsContent}>
        <Card>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <span>Recent Transactions</span>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={styles.spaceY3}>
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className={`${styles.flexItemsCenterJustifyBetween} ${styles.p3} ${styles.borderBorder} ${styles.roundedLg}`}
                >
                  <div>
                    <p className={styles.fontMedium}>
                      {transaction.amount} {transaction.currency}
                    </p>
                    <p
                      className={`${styles.textSm} ${styles.textMutedForeground}`}
                    >
                      to {transaction.recipient}
                    </p>
                  </div>
                  <div className={styles.textRight}>
                    <Badge
                      className={getTransactionStatusColor(transaction.status)}
                    >
                      {transaction.status}
                    </Badge>
                    <p
                      className={`${styles.textXs} ${styles.textMutedForeground} ${styles.mt1}`}
                    >
                      {transaction.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
