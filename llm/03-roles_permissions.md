## 3. User Roles & Permissions

```mermaid
  flowchart LR
    Admin[Administrator]
    Cate[Catechist]
    Parent[Parent/Representative]

    Admin -->|CRUD| Catechist
    Admin -->|CRUD| Catechizand
    Admin -->|CRUD| Representative
    Admin -->|CRUD| Level
    Admin -->|CRUD| Room
    Admin -->|CRUD| Session

    Cate -->|Create/Modify| Session
    Cate -->|Mark Attendance| AttendanceRecord
    Cate -->|Justify Absences| AttendanceRecord
    Cate -->|Grade Assessments| Assessment
    Cate -->|Grade Homework| HomeworkAssignment

    Parent -->|View| OwnAttendance
    Parent -->|View| ChildRecords
```

### 3.1 Administrator

- Full CRUD on catechists, catechizands, representatives, levels, rooms, sessions.
- Assign catechists ↔ rooms; catechizands ↔ rooms.

### 3.2 Catechist

- **Session Management**: create sessions (date, topic, room).
- **Attendance**: present/absent/justified; modify absent → justified with note/attachment.
- **Grading**: add assessments and homework grades (1–10).

### 3.3 Parent/Representative

- **Read-only**: view own attendance in "Parents" level and child catechizand records.