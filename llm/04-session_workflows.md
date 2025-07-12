## 4. Session & Evaluation Workflows

### 4.1 Attendance Recording

```mermaid
  sequenceDiagram
    participant C as Catechist
    participant S as System
    participant DB as Database

    C->>S: Login
    C->>S: Select Room
    C->>S: Create Session(date, topic)
    S->>DB: Insert Session record

    loop For each Catechizand in Room
      C->>S: Mark Present / Absent / Justified for [Catechizand]
      S->>DB: Insert AttendanceRecord
    end
```

### 4.2 Justifying Absences

```mermaid
  sequenceDiagram
    participant C as Catechist
    participant S as System
    participant DB as Database

    C->>S: Login
    C->>S: Select Session(date)
    loop For each Absent AttendanceRecord
      C->>S: Change status to Justified
      C->>S: Add justification note & optional attachment
      S->>DB: Update AttendanceRecord
    end

    note over S: After recovery class session
    S->>DB: Convert justified records back to Present
```

### 4.3 Assessments & Homework

```mermaid
  sequenceDiagram
    participant C as Catechist
    participant S as System
    participant DB as Database

    C->>S: Login
    C->>S: Select Room
    loop For each Catechizand to grade
      C->>S: Select Catechizand
      alt Assessment
        C->>S: Add Assessment grade (1–10)
        S->>DB: Insert Assessment record
      else Homework
        C->>S: Add Homework grade (1–10)
        S->>DB: Insert HomeworkAssignment record
      end
    end
```

- Attendance records and justified absences are immutable except that justified absences convert to attendance after a recovery class.
- Assessment and homework grades are timestamped and tied to the creating Catechist.
