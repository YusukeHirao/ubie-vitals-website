import { Text, Flex } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Tag: FC = () => {
  const tagText = '循環器内科';

  return (
    <Flex spacing="md" alignItems="center">
      <Text type="tag" size="sm">
        sm
        <br />
        {`${tagText}`}
      </Text>
      <Text type="tag" size="md">
        md
        <br />
        {`${tagText}`}
      </Text>
      <Text type="tag" size="lg">
        lg
        <br />
        {`${tagText}`}
      </Text>
    </Flex>
  );
};

export default Tag;
