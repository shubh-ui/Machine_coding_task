import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Category",
    children: [
      {
        id: 2,
        name: "Fruits",
        children: [
          {
            id: 3,
            name: "Mango",
            children: [
              {
                id: 9,
                name: "Alphonso",
              },
              {
                id: 10,
                name: "Himsagar",
              },
            ],
          },
          {
            id: 4,
            name: "Banana",
            children: [
              {
                id: 11,
                name: "Plantain",
              },
              {
                id: 12,
                name: "Cavendish",
              },
            ],
          },
          {
            id: 5,
            name: "Apple",
            children: [
              {
                id: 13,
                name: "Granny Smith",
              },
              {
                id: 14,
                name: "Red Delicious",
              },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "Colors",
        children: [
          {
            id: 7,
            name: "Green",
            children: [
              {
                id: 15,
                name: "Olive",
              },
              {
                id: 16,
                name: "Forest Green",
              },
            ],
          },
          {
            id: 8,
            name: "Blue",
            children: [
              {
                id: 17,
                name: "Sky Blue",
              },
              {
                id: 18,
                name: "Navy Blue",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 19,
    name: "Dept",
    children: [
      {
        id: 20,
        name: "HR",
        children: [
          {
            id: 21,
            name: "Recruitment",
          },
          {
            id: 22,
            name: "Employee Relations",
          },
        ],
      },
      {
        id: 23,
        name: "IT",
        children: [
          {
            id: 24,
            name: "Development",
          },
          {
            id: 25,
            name: "Infrastructure",
          },
        ],
      },
    ],
  },
];

const CheckBox = ({ data, checked, setChecked }) => {
  console.log(checked);

  const handleCheck = (node, isCheck) => {
    setChecked((preData) => {
      const copyData = { ...preData, [node.id]: isCheck };
      const nestedCheck = (node) => {
        if (node?.children) {
          node.children.forEach((nodeCh) => handleCheck(nodeCh, isCheck));
        }
      };
      nestedCheck(node);
      return copyData;
    });
  };

  return (
    <>
      {data.map((node) => {
        return (
          <div key={node.id} style={{ paddingLeft: "20px" }}>
            <input
              type="checkbox"
              checked={checked[node.id]}
              onClick={(e) => handleCheck(node, e.target.checked)}
            />
            <span>{node.name}</span>
            {node?.children && (
              <CheckBox
                data={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

const NestedCheckBox = () => {
  const [checked, setChecked] = useState({});

  return (
    <div>
      <CheckBox data={data} checked={checked} setChecked={setChecked} />
    </div>
  );
};

export default NestedCheckBox;
