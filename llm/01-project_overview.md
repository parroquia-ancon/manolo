## 1. Project Overview

This application supports catechism programs in a Catholic parish by guiding catechizands through Christian Initiation, First Communion, and Confirmation, and by enabling catechists to record:

- **Attendance** (present, absent, justified absence per session)
- **Assessments** (1–10 scale, ad hoc)
- **Homework** (1–10 scale, ad hoc)

Role-based views ensure Administrators, Catechists, and Parents/Representatives access the right data.

### 1.1 Sacramental Objectives & Levels

The liturgical year is divided into levels with age-based rooms:

#### 1.1.1 Regular Program

```mermaid
    flowchart LR
    subgraph "Christian_Initiation"
      CI1("Room 1: 6 to 9 years")
      CI2("Room 2: 10 to 13 years")
    end

    subgraph "First_Communion"
      subgraph "First Level"
        FC1("Room 1: 8 to 9 years")
        FC2("Room 2: 10 to 15 years")
      end
      subgraph "Second Level"
        FC3("Room 1: 8 to 11 years")
        FC4("Room 2: 12 to 15 years")
      end
    end

    subgraph "Biblical_Year"
      BY1("Room 1: 9 to 12 years")
      BY2("Room 2: 13 to 15 years")
    end

    subgraph "Confirmation"
      subgraph "First Level"
        CF1("Room 1: 11 to 16 years")
      end
      subgraph "Second Level"
        CF2("Room 1: 11 to 16 years")
      end
    end
    Christian_Initiation --> First_Communion
    First_Communion --> Biblical_Year
    Biblical_Year --> Confirmation
```

#### 1.1.2 Catechumen Program
```mermaid
  flowchart TB
    subgraph Catechumen
      CA1[Room 1: > 18 years]
    end
```


#### 1.1.3 Parents Program
```mermaid
  flowchart TB
    subgraph Parents Level
      P1[Group 1: 50% of parents]
      P2[Group 2: 50% of parents]
    end
```

- Completing **First Communion – Second Level** qualifies child catechizands for First Communion.
- Completing **Confirmation – Second Level** qualifies child catechizands for Confirmation as children.
- Adults in **Catechumen** level (> 18 years) undergo a one‑year Confirmation preparation.

At year start, Administrators create rooms and assign catechizands and catechists.