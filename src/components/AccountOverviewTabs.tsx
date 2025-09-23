import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, CreditCard } from "lucide-react";

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

export function AccountOverviewTabs({ user, transactions }: AccountOverviewTabsProps) {
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
    <Tabs defaultValue="account-details" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account-details" className="flex items-center space-x-2">
          <User className="w-4 h-4" />
          <span>Account Details</span>
        </TabsTrigger>
        <TabsTrigger value="transactions" className="flex items-center space-x-2">
          <CreditCard className="w-4 h-4" />
          <span>Recent Transactions</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="account-details" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Account Details</span>
              <Badge className={getKycStatusColor(user.kycStatus)}>
                {user.kycStatus}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">First Name</p>
                  <p className="font-medium">{user.firstName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Name</p>
                  <p className="font-medium">{user.lastName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date of Birth</p>
                  <p className="font-medium">{user.dateOfBirth}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Country of Residence</p>
                  <p className="font-medium">{user.countryOfResidence}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Language</p>
                  <p className="font-medium">{user.language}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Phone Number</p>
                  <p className="font-medium">{user.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Address</p>
                  <p className="font-medium">{user.emailAddress}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time Created</p>
                  <p className="font-medium">{user.timeCreated}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Login Date</p>
                  <p className="font-medium">{user.lastLoginDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">User ID</p>
                  <p className="font-medium font-mono text-xs break-all">{user.userId}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="transactions" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recent Transactions</span>
              <Button variant="outline" size="sm">View All</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">{transaction.amount} {transaction.currency}</p>
                    <p className="text-sm text-muted-foreground">to {transaction.recipient}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={getTransactionStatusColor(transaction.status)}>
                      {transaction.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{transaction.date}</p>
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